output "sg_id" {
  description = "The ID of the security group created for the project"
  value       = aws_security_group.this.id
}
