interface INumerologyCalculator{
    getLifeNumerology():number;
    getAstrologyName():string;
}

class NumerologyCalculator implements INumerologyCalculator{
    private _birthYear:number;
    private _birthMonth:number;
    private _birthDay:number;

    constructor(year: number,month:number,day:number)
    {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }
    getLifeNumerology():number{
        let str  = this._birthYear.toString()+this._birthMonth.toString()+this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    }

    getLifeNumerologyInternal(str:string):number{
        let result= 0;
        let splitted = str.split(""); 
        splitted.forEach(element => {
            result +=parseInt(element);
        });
        if(result>9)
        {
            result = this.getLifeNumerologyInternal(result.toString());   
        }
        return result;
    }

    getAstrologyName():string{
        const m  = this._birthMonth;
        const d = this._birthDay;

        if((m==1&&d>=20)||(m==2)&&d<=18)
        return "aquarius.json"
        else if((m==2&&d>=19)||(m==3)&&d<=20)
        return "pisces.json"
        else if((m==3&&d>=21)||(m==4)&&d<=20)
        return "aries.json"
        else if((m==4&&d>=21)||(m==5)&&d<=20)
        return "taurus.json"
        else if((m==5&&d>=21)||(m==6)&&d<=21)
        return "gemini.json"
        else if((m==6&&d>=22)||(m==7)&&d<=22)
        return "cancer.json"
        else if((m==7&&d>=23)||(m==8)&&d<=22)
        return "leo.json"
        else if((m==8&&d>=23)||(m==9)&&d<=22)
        return "virgo.json"
        else if((m==9&&d>=23)||(m==10)&&d<=22)
        return "libra.json"
        else if((m==10&&d>=23)||(m==11)&&d<=21)
        return "scorpio.json"
        else if((m==11&&d>=22)||(m==12)&&d<=21)
        return "sagittarius.json"
        else if((m==12&&d>=22)||(m==1)&&d<=19)
        return "capricorn.json"

    }
}



