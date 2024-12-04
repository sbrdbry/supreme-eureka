pipeline {
  environment {
    registry = 'sharpfranklin/alpine'
    registryCredential = ''
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
    stage('Deploy our image') {
      steps {
        script {
          docker.withRegistry( 'https://192.168.1.156:5000' ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Cleaning up') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
