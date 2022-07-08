export class userDataModel {
    constructor(data) {
      this.userId = data.id;
      this.userInfos = data.userInfos;
      if (data.userInfos) {
        this.firstName = data.userInfos.firstName;
      }
      if (data.score) {
        this.todayScore = data.score;
      } else if (data.todayScore) {
        this.todayScore = data.todayScore;
      }
      this.keyData = data.keyData;
      if(data.keyData){
        this.calorieCount = data.keyData.calorieCount;
        this.proteinCount = data.keyData.proteinCount;
        this.carbohydrateCount = data.keyData.carbohydrateCount;
        this.lipidCount = data.keyData.lipidCount;
      }
    }
  }

export class activityDataModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
  

export class averageDataModel {
    constructor(data) {
        this.userId = data.id;
        this.sessions = data.sessions;
    }
}

export class performanceDataModel {
    constructor(data) {
        this.userId = data.id;
        this.sessions = data.data;
    }
}

export function renameAverage() {
  const days = (data) => {
    switch (data) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";            
      default:
        break;
    }   
}
  return days
}

export function renameChart() {
  const change = (item) => {
    switch (item) {
        case 1:
        return "Cardio";
        case 2:
        return "Energie";
        case 3:
        return "Endurance";
        case 4:
        return "Force";
        case 5:
        return "Vitesse";
        case 6:
        return "Intensité";          
        default:
        break;
    }
}
return change
}