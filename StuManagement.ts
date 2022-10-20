import {Student} from "./Student";

export class StuManagement {
    static students: Student[] = [];

    static add(student: Student): void {
        this.students.push(student);
    }

    static showList(): Student[] {
        return this.students;
    }

    static total(): number {
        return this.students.length;
    }

    static showRank(): Student[] {
        let i, key, j;
        for (i=1;i<this.students.length;i++) {
            key = this.students[i];
            j = i - 1;

            while (j>=0 && this.students[j].calcScore() > key.calcScore()) {
                this.students[j+1] = this.students[j];
                j--;
            }

            this.students[j+1] = key;
        }
        return this.showList();
    }

    static searchByName(name: string): Student[] {
        return this.students.filter(item=>{
            return item.getName() === name;
        });
    }

    static searchByGroup(group: string): Student[] {
        return this.students.filter(item=>{
            return item.getGroup() === group;
        })
    }
}
