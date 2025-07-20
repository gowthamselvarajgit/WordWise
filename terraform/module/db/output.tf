output "instance_public_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.frontend.public_ip
}

output "instance_public_dns" {
  description = "The public DNS of the EC2 instance"
  value       = aws_instance.frontend.public_dns
}

output "rds_endpoint" {
  description = "The connection endpoint for the RDS instance"
  value       = aws_db_instance.wordwise_db.endpoint
}

output "rds_username" {
  description = "The master username for the RDS instance"
  value       = aws_db_instance.wordwise_db.username
}

output "rds_engine" {
  description = "The engine used for the RDS instance"
  value       = aws_db_instance.wordwise_db.engine
}
