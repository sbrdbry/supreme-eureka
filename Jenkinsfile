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
    /*stage('Building our image') {
      steps {
        script {
          dockerImage = docker.build registry + ":${BUILD_NUMBER}"
        }
      }
    }*/
    /*stage('Login') {
        steps {
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin https://registry.shrulp.com"
        }
    }*/
    /*stage('Deploy our image') {
      steps {
        script {
          docker.withRegistry( 'https://registry.shrulp.com', registryCredential ) {
            dockerImage.push()
          }
          //sh "ssh ubuntu@192.168.1.142"
        }
      }
    }*/
    stage('SCP copy') {
        when {
            expression {
                //env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'master'
                env.BRANCH_NAME == 'main'
            }
        }
        steps {
            withCredentials([sshUserPrivateKey(credentialsId: '171f98f4-f21b-476c-8264-b20a07667b1b', keyFileVariable: 'MY_SSH_KEY')]) {
                sh '''
                ssh -i $MY_SSH_KEY ubuntu@192.168.1.142 "cd /home/ubuntu/testdir && docker compose down"
                '''
                sh '''
                ssh -i $MY_SSH_KEY ubuntu@192.168.1.142 "rm -rf /home/ubuntu/testdir && mkdir /home/ubuntu/testdir"
                '''
                /*sh '''
                scp -rp -i $MY_SSH_KEY ./. ubuntu@192.168.1.142:/home/ubuntu/testdir
                '''*/
                sh '''
                docker compose up -d
                '''
                sh '''
                rsync -a ./ --exclude=node_modules --exclude=.git ubuntu@192.168.1.142:/home/ubuntu/testdir
                '''
                sh '''
                docker compose down -v --rmi all
                '''
                /*sh '''
                ssh -i $MY_SSH_KEY ubuntu@192.168.1.142 "cd /home/ubuntu/testdir && npm i && npm run build && docker compose up -d"
                '''*/
                //sh '''
                //ssh -i $MY_SSH_KEY ubuntu@192.168.1.142 "cd /home/ubuntu/testdir && npm i && npm run build && docker compose up -d"
                //'''
            }
        }
    }
    /*stage ('Deploy to remote host') {
        steps {
            //sshagent(credentials : ['0ed2afa1-cb4b-4931-a7a7-a38283cd4afa']) {
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.1.142 uptime'
            sh 'ssh -v ubuntu@192.168.1.142'
            sh 'scp ./* ubuntu@192.168.1.142:/home/ubuntu/testdir'
            //}
        }
    }*/
    /*stage('Cleaning up') {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
        sh "docker rmi registry.shrulp.com/$registry:$BUILD_NUMBER"
      }
    }*/
  }
}
