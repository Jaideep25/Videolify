pipeline{
    agent any
    stages{
        stage("Code"){
            steps{
                git url: "https://github.com/Jaideep25/Videolify.git", branch:"master"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                sh "docker build -t videolify ."
            }
        }
        stage("Push to Docker Hub"){
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                sh "docker tag videolify ${env.dockerHubUser}/videolify:latest"
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker push ${env.dockerHubUser}/videolify:latest"
                }
            }
        }
        stage("Deploy"){
            steps {
                echo "Deploying the container"
                sh "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}
