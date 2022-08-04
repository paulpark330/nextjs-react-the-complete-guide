import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Max" },
    { id: "jane", name: "Jane" },
    { id: "mary", name: "Mary" },
    { id: "john", name: "John" },
    { id: "joe", name: "Joe" },
    { id: "jim", name: "Jim" },
    { id: "jake", name: "Jake" },
    { id: "jess", name: "Jess" },
    { id: "jeff", name: "Jeff" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: "/clients/[id]",
              query: { id: client.id }
            }}>
              <a>{client.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
