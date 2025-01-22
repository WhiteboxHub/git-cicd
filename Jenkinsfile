// pipeline {
//     agent any
//     environment {
//         DOCKER_IMAGE = 'remote123/whiteboxlearning'  // Docker Hub repository
//         TAG_NAME = 'git-cicd'                       // Tag for the image
//     }
//     stages {
//         stage('Clone Repository') {
//             steps {
//                 // Clone the GitHub repository
//                 git 'https://github.com/WhiteboxHub/git-cicd.git'
//             }
//         }
//         stage('Build Docker Image') {
//             steps {
//                 script {
//                     // Build the Docker image and tag it with the desired name
//                     IMAGE_TAG = "${DOCKER_IMAGE}:${TAG_NAME}"
//                     echo "Building Docker image: ${IMAGE_TAG}"
//                     sh "docker build -t ${IMAGE_TAG} ."
//                 }
//             }
//         }
//         stage('Push Docker Image') {
//             steps {
//                 script {
//                     // Log in to Docker Hub and push the tagged image
//                     withDockerRegistry([credentialsId: '121', url: 'https://index.docker.io/v1/'])
//                         echo "Pushing Docker image: ${IMAGE_TAG}"
//                         sh "docker push ${IMAGE_TAG}"
//                     }
//                 }
//             }
//         }
//     }
// }
// added changes here: https://github.com/
pipeline {
    agent any

    environment {
        UI_REPO_URL = 'https://github.com/WhiteboxHub/git-cicd.git'
        UI_BUILD_DIR = 'ui-build'
        DEPLOY_ENV = 'staging' // or 'production'
    }

    stages {
        stage('Checkout UI') {
            steps {
                git url: "${UI_REPO_URL}", branch: 'main'
            }
        }

        stage('Build UI') {
            steps {
                dir("${UI_BUILD_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test UI') {
            steps {
                dir("${UI_BUILD_DIR}") {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy UI') {
            steps {
                script {
                    // Add your deployment steps here
                    // For example, copying build files to a deployment directory
                    sh "cp -r ${UI_BUILD_DIR}/build/* /path/to/deployment/directory/"
                }
            }
        }
    }

    post {
        always {
            echo 'UI Pipeline completed.'
        }
        success {
            echo 'UI Pipeline succeeded.'
            // Notify success
            sh 'curl -X POST -d "" your-success-webhook-url'
        }
        failure {
            echo 'UI Pipeline failed.'
            // Notify failure
            sh 'curl -X POST -d "" your-failure-webhook-url'
        }
    }
}
