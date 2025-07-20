# VPC Outputs
output "vpc_id" {
  description = "The ID of the created VPC"
  value       = module.vpc.vpc_id
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value       = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value       = module.vpc.private_subnet_ids
}

# Security Group Output
output "security_group_id" {
  description = "ID of the security group"
  value       = module.security_group.security_group_id
}

# EC2 Instance Outputs
output "ec2_instance_id" {
  description = "The ID of the EC2 instance"
  value       = module.ec2.instance_id
}

output "ec2_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = module.ec2.public_ip
}

# RDS DB Outputs
output "db_instance_id" {
  description = "ID of the RDS DB instance"
  value       = module.db.db_instance_id
}

output "db_endpoint" {
  description = "Endpoint of the RDS DB instance"
  value       = module.db.db_endpoint
}
