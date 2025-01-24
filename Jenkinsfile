// pipeline {
//     agent any

//     parameters {
//         string(name: 'IMAGE_TAG', defaultValue: 'latest', description: 'Tag for Docker image')
//         string(name: 'DOCKER_CREDENTIALS_ID', defaultValue: 'docker-hub-credentials', description: 'Docker Hub credentials ID')
//         string(name: 'AWS_CREDENTIALS_ID', defaultValue: 'aws-credentials', description: 'AWS credentials ID')
//     }

//     environment {
//         ImageTag = "${params.IMAGE_TAG}"
//         DOCKER_CREDENTIALS_ID = "${params.DOCKER_CREDENTIALS_ID}"xs
//         AWS_CREDENTIALS_ID = "${params.AWS_CREDENTIALS_ID}"
//     }

//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git credentialsId: 'e6a63844-f676-4413-817e-a55a957ebff1',
//                 url: 'https://github.com/WhiteboxHub/git-cicd.git',
//                 branch: 'main'
//             }
//         }
//         // stage for docker

//         stage('Build Docker') {
//             steps {
//                 script {
//                     sh '''
//                     echo 'Build Docker Image'
//                     docker build -t remote123/whiteboxlearning:${ImageTag} .
//                     '''
//                 }
//             }
//         }

//         stage('Push the artifacts') {
//             steps {
//                 script {
//                     withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable:docker-hub-credentials, usernameVariable:REMOTE IP)]) {
//                         sh '''
//                         echo 'Push to Repo'
//                         echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
//                         docker push remote123/whiteboxlearning:${ImageTag}
//                         '''
//                     }
//                 }
//             }
//         }

//         stage('Deploy to EC2') {
//             steps {
//                 script {
//                     withCredentials([string(credentialsId: "${AWS_CREDENTIALS_ID}", variable: 'AWS_ACCESS_KEY_ID')]) {
//                         sh '''
//                         echo 'Deploying to EC2'
//                         ssh -i Git-CICD.pem ec2-user@ip-172-31-12-97 "docker pull remote123/whiteboxlearning:${ImageTag} && docker run -d -p 80:80 remote123/whiteboxlearning:${ImageTag}"
//                         '''
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             sh 'docker logout'
//         }
//     }
// }

pipeline {
    agent any

    parameters {
        string(name: 'IMAGE_TAG', defaultValue: 'latest', description: 'Tag for Docker image')
        string(name: 'DOCKER_CREDENTIALS_ID', defaultValue: 'docker-hub-credentials', description: 'Docker Hub credentials ID')
        string(name: 'AWS_CREDENTIALS_ID', defaultValue: 'aws-credentials', description: 'AWS credentials ID')
    }

    environment {
        ImageTag = "${params.IMAGE_TAG}"
        DOCKER_CREDENTIALS_ID = "${params.DOCKER_CREDENTIALS_ID}"
        AWS_CREDENTIALS_ID = "${params.AWS_CREDENTIALS_ID}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'e6a63844-f676-4413-817e-a55a957ebff1',
                url: 'https://github.com/WhiteboxHub/git-cicd.git',
                branch: 'main'
            }
        }

        stage('Build Docker') {
            steps {
                script {
                    sh '''
                    echo 'Build Docker Image'
                    docker build -t remote123/whiteboxlearning:${ImageTag} .
                    '''
                }
            }
        }

        stage('Push the artifacts') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh '''
                        echo 'Push to Repo'
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        docker push remote123/whiteboxlearning:${ImageTag}
                        '''
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    withCredentials([string(credentialsId: "${AWS_CREDENTIALS_ID}", variable: 'AWS_ACCESS_KEY_ID')]) {
                        sh '''
                        echo 'Deploying to EC2'
                        ssh -i Git-CICD.pem ec2-user@ip-172-31-12-97 "docker pull remote123/whiteboxlearning:${ImageTag} && docker run -d -p 80:80 remote123/whiteboxlearning:${ImageTag}"
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}


