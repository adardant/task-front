pipeline {  //execute le pipeline sur le premier noeu jenkins dispo
  agent any  //exe le pipeline ou le stage sur nimp quel noeu jenkins dispo
  tools{
    nodejs 'default-nodejs'
  }
  stages{
    stage("start"){
      steps{
        script{
          sh 'npm install'
        }
      }
    }
    stage("build"){
      steps{
        script{
          sh 'npm run build'
        }
      }
    }
    stage("Test"){
      steps{
        script{
          sh 'npm run test' // ou  ou npm test
        }
      }
    }
    stage("startApp"){
      steps{
        script{
          sh 'npm run start' // ou  ou npm test
        }
      }
    }

  }

}

