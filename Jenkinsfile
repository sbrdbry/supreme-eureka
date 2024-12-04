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
          sh "echo $BUILD_NUMBER"
          dockerImage = docker.build registry + ":${BUILD_NUMBER}"
        }
      }
    }
    stage('Deploy our image') {
      steps {
        script {
          docker.withRegistry( '192.168.1.156:5000', registryCredential ) {
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
