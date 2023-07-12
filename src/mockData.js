// Mock tasks data
export const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Lorem ipsum dolor sit amet.",
      dueDate: "2023-07-31",
      assignee: "John Doe",
      status: "In Progress",
      comments: [
        {
          id: 1,
          text: "Comment 1",
          user: "Jane Smith",
          timestamp: "2023-07-10 10:30",
        },
        {
          id: 2,
          text: "Comment 2",
          user: "John Doe",
          timestamp: "2023-07-11 14:45",
        },
      ],
    },
    {
      id: 2,
      name: "Task 2",
      description: "Consectetur adipiscing elit.",
      dueDate: "2023-08-15",
      assignee: "Jane Smith",
      status: "In Progress",
      comments: [
        {
          id: 1,
          text: "Comment 1",
          user: "John Doe",
          timestamp: "2023-07-12 09:15",
        },
      ],
    },
    // Add more tasks as needed
  ];
  