pipeline {
  environment {
    registry = 'sharpfranklin/supreme-eureka'
    registryCredential = '5029e41d-f41a-4ee5-a164-9ef0c91b97f9'
    dockerImage = ''
  }
	agent { node { label 'copper' } }
  stages {
    stage('Cloning our Git') {
      steps {
        git branch: 'main', url: 'https://github.com/sbrdbry/supreme-eureka.git'
      }
    }
    stage('Building our image') {
      steps {
        script {
          dockerImage = docker.build registry + ":${BUILD_NUMBER}"
        }
      }
    }
    /*stage('Login') {
        steps {
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin https://registry.shrulp.com"
        }
    }*/
    stage('Deploy our image') {
      steps {
        script {
          docker.withRegistry( 'https://registry.shrulp.com', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Cleaning up') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
        sh "docker rmi registry.shrulp.com/$registry:$BUILD_NUMBER"
      }
    }
  }
}
