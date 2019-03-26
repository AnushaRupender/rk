export class CompanyRecord {
	public companyName:any;
	public phoneNumber: any;
	public description: string;
	public otherInfo: string;
	public prior: number;
	constructor(company){
		this.companyName = company.compayName;
		this.phoneNumber = company.phoneNumber;
		this.description = company.description;
		this.otherInfo = company.otherInfo;
		this.prior = company.prior;
	}
}
