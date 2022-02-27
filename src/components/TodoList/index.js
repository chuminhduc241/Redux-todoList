import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selector";
import { addTodo } from "./todosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todoRemainingSelector);

  const handleButtonClick = () => {
    dispatch(
      addTodo({
        name: todoName,
        id: uuidv4,
        prioriry: priority,
        completed: false,
      })
    );
    setTodoName("");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            name={todo.name}
            key={todo.id}
            completed={todo.completed}
            prioriry={todo.prioriry}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
