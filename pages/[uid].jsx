const UserIdPage = (props) => {
  const { id } = props;

  return <h1>{id}</h1>;
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}

export default UserIdPage;
