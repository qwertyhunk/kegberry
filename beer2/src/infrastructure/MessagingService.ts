import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export const GetUsers: string = 'getUsers';
export const AddUser: string = 'addUser';
export const SelectUser: string = 'selectUser';
export const GetLeaderboard: string = 'getTopPourers';

export class MessagingService implements IMessagingService {
    private _url = 'ws://kegberry:8080';
    private socket: WebSocket;

    private _onConnected: ReplaySubject<any> = new ReplaySubject<any>(1);
    public readyStream: Observable<any> = this._onConnected.asObservable();

    private _onClosed: Subject<any> = new Subject<any>();
    public closedStream: Observable<any> = this._onClosed.asObservable();

    // message streams
    private pourNotification: string = 'pourUpdate';
    private _pourNotification: Subject<IPourNotification> = new Subject<IPourNotification>();
    pourNotificationStream: Observable<IPourNotification> = this._pourNotification.asObservable();
    
    private temperatureNotification: string = 'weatherNotification';
    private _temperatureMessage: Subject<ITemperatureNotification> = new Subject<ITemperatureNotification>();
    temperatureMessageStream: Observable<ITemperatureNotification> = this._temperatureMessage.asObservable();
    
    private currentUserTimeoutNotification: string = 'currentUserNotification';
    private _currentUserTimeoutNotification: Subject<any> = new Subject<any>();
    currentUserTimeoutNotification$: Observable<any> = this._currentUserTimeoutNotification.asObservable();

    private getUsersResponse: string = 'getUsersResponse';
    private _getUsersResponse: BehaviorSubject<IGetUserResponse|undefined> = new BehaviorSubject<IGetUserResponse|undefined>(undefined);
    public getUsersResponseStream: Observable<IGetUserResponse|undefined> = this._getUsersResponse.asObservable().pipe(filter(res => !!res));

    private addUserResponse: string = 'addUserResponse';
    private _addUserResponseStream: Subject<IUser> = new Subject<IUser>();
    public addUserResponseStream: Observable<IUser> = this._addUserResponseStream.asObservable().pipe(filter(res => !!res));

    private getLeaderboardResponse: string = 'getTopPourersResponse';
    private _getLeaderboardResponseStream: Subject<IGetLeaderboardResponse> = new Subject<IGetLeaderboardResponse>();
    public getLeaderboardResponseStream: Observable<IGetLeaderboardResponse> = this._getLeaderboardResponseStream.asObservable();

    constructor() {
        this.socket = new WebSocket(this._url);
        this.connectToSocket();
    }

    private connectToSocket(): void {
        // Open the socket
        this.socket.onopen = (onOpenEvent) => {
            
            this._onConnected.next(undefined);
           
            // Listen for messages
            this.socket.onmessage = (onMessageEvent) => {
                console.log('Client received a message', onMessageEvent);
                this.processMessage(onMessageEvent.data)
            };

            // Listen for socket closes
            this.socket.onclose = (onCloseEvent) => {
                this._onClosed.next(undefined)
                console.log('Client notified socket has closed',onCloseEvent);
            };
        };
    }

    private processMessage(msg: string): void {
        let message: IResponseMessage;
        try {
            message = JSON.parse(msg);
        } catch (e) {
            console.log('Error parsing message:' + e);
            return;
        }

        switch(message.messageName) {
            // notifications
            case this.temperatureNotification:
                this._temperatureMessage.next(message.data);
            break;
            case this.currentUserTimeoutNotification:
                this._currentUserTimeoutNotification.next(undefined);
            break;
            case this.pourNotification:
                this._pourNotification.next(message.data);
            break;

            // responses
            case this.getUsersResponse:
                this._getUsersResponse.next(message.data);
            break;
            case this.addUserResponse:
                this._addUserResponseStream.next(message.data);
            break;
            case this.getLeaderboardResponse:
                this._getLeaderboardResponseStream.next(message.data);
            break;
            default:
                console.log('Message notification not supported: ' + message.messageName);
            break;
        }
    }

    sendMessage(messageName: string, data?: any): void {
        let msg = {messageName, data};
        console.log(msg);
        this.socket.send(JSON.stringify(msg));
    }
}

export interface IMessagingService {
    sendMessage(messageName: string, data?: any): void;
    pourNotificationStream: Observable<IPourNotification>;
    temperatureMessageStream: Observable<ITemperatureNotification>;
    currentUserTimeoutNotification$: Observable<any>;
    addUserResponseStream: Observable<IUser>;
    getUsersResponseStream: Observable<IGetUserResponse|undefined>;
    getLeaderboardResponseStream: Observable<IGetLeaderboardResponse>;
    readyStream: Observable<any>;
}

export interface IMessage {
    messageName: string;
    data: any;
}

export interface ITemperatureNotification {
    temperature: number;
    humidity: number;
}

export interface IAddUserMessageData {
    name: string;
}

export interface IAddUserMessage {
    name: string;
}

export interface IGetLeaderboard {
    lastHours: number;
}

export interface IGetUserResponse {
    users: IUser[];
}

// export interface IAddUserResponse extends IUser {
// }

export interface IGetLeaderboardResponse {
    pourers: IPourer[];
}

export interface IPourer {
    userId: string;
    amount: number;
    userName: string;
}

export interface ISelectUserData {
    id: string;
}

export interface IUser {
    name: string;
    id: string;
}

export interface IResponseMessage extends IMessage {
    error: string;
}

export interface IPourNotification {
    currentUser: IUser;
    incrementalPour: number;
    totalPour: number;
    isFinished: boolean;
}
