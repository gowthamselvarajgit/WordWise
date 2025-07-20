resource "aws_instance" "frontend" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = var.subnet_id
  key_name                    = var.key_name
  vpc_security_group_ids      = [var.security_group_id]
  associate_public_ip_address = true

  tags = {
    Name = "${var.project_name}-app-server"
  }

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install -y curl git openjdk-17-jdk maven

              # Install Node.js (for frontend)
              curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
              apt install -y nodejs

              # Clone your repository
              git clone https://github.com/gowthamselvarajgit/WordWise.git /home/ubuntu/wordwise

              # Deploy Frontend
              cd /home/ubuntu/wordwise/frontend
              npm install
              npm run build
              npm install -g serve
              nohup serve -s build -l 80 &

              # Deploy Backend
              cd /home/ubuntu/wordwise/backend
              mvn clean package -DskipTests
              nohup java -jar target/*.jar --server.port=8080 &

              EOF
}
