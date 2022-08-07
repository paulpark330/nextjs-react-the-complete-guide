const UserProfilePage = (props) => {
  const { username } = props;

  return <h1>{username}</h1>;
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req);
  console.log(res);

  return {
    props: {
      username: "Paul",
    },
  };
}

export default UserProfilePage;
