INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("QA");
INSERT INTO role (title, salary, department_id) VALUES ("junior", 30030.16, 1);
INSERT INTO role (title, salary, department_id) VALUES ("senior", 130800.82, 1);
INSERT INTO role (title, salary, department_id) VALUES ("mid-level", 70000.42, 1);
INSERT INTO role (title, salary, department_id) VALUES ("manager", 307000.17, 1);
INSERT INTO role (title, salary, department_id) VALUES ("junior", 30040.12, 2);
INSERT INTO role (title, salary, department_id) VALUES ("senior", 137000.12, 2);
INSERT INTO role (title, salary, department_id) VALUES ("mid-level", 70000.12, 2);
INSERT INTO role (title, salary, department_id) VALUES ("manager", 300030.12, 2);
INSERT INTO role (title, salary, department_id) VALUES ("junior", 30050.12, 3);
INSERT INTO role (title, salary, department_id) VALUES ("senior", 130600.12, 3);
INSERT INTO role (title, salary, department_id) VALUES ("mid-level", 70800.32, 3);
INSERT INTO role (title, salary, department_id) VALUES ("manager", 300200.12, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("john", "smith", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("lisa", "simpson", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("hank", "jill", 6, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("tim", "thetoolman", 11, 12);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("mary", "smith", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("doug", "smith", 8);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("tommy", "smith", 12);