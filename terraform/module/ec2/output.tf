output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.frontend.public_ip
}

output "instance_public_dns" {
  description = "Public DNS name of the EC2 instance"
  value       = aws_instance.frontend.public_dns
}

output "website_url" {
  description = "Website URL for the frontend"
  value       = "http://${aws_instance.frontend.public_ip}"
}

output "backend_api_url" {
  description = "API base URL for the backend"
  value       = "http://${aws_instance.frontend.public_ip}:8080"
}
