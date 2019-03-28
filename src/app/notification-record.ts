export class NotificationRecord {
	public name: string;
	public summary: string;
	public custId: string;
	public number: string;
	public status: string;
	public isAlive: string;
	constructor(notification){
		this.name = notification.name;
		this.summary = notification.summary;
		this.custId = notification.custId;
		this.number = notification.number;
		this.status = notification.status;
		this.isAlive = notification.isAlive;
	}
}
