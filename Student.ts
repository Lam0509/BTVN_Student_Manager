export class Student {
    private name: string;
    private group: string;
    private scoreHK1: number;
    private scoreHK2: number;

    constructor(name:string, group: string, scoreHK1: number, scoreHK2: number) {
        this.name = name;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }

    public calcScore(): number {
        return (this.scoreHK1+this.scoreHK2)/2;
    }

    public getName(): string {
        return this.name;
    }

    public getGroup(): string {
        return this.group;
    }
}