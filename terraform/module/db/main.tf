resource "aws_db_instance" "wordwise_db" {
  allocated_storage      = var.db_allocated_storage
  engine                 = var.db_engine
  engine_version         = var.db_engine_version
  instance_class         = var.db_instance_class
  username               = var.db_username
  password               = var.db_password
  parameter_group_name   = "default.${var.db_engine}${replace(var.db_engine_version, ".", "")}"
  skip_final_snapshot    = true
  publicly_accessible    = true
  db_subnet_group_name   = var.db_subnet_group_name
  vpc_security_group_ids = [var.db_security_group_id]
}
