pipeline {  //execute le pipeline sur le premier noeu jenkins dispo
  agent any  //exe le pipeline ou le stage sur nimp quel noeu jenkins dispo
  tools{
    nodejs 'node'
  }

  stages{
    stage("config"){
      steps{
        script{
          sh 'npm config ls'
        }
      }
    }
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

