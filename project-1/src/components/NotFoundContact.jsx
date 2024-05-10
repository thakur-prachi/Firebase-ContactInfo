const NotFoundContact = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center gap-4">
      <div className="bg-cover bg-no-repeat bg-center  h-80">
        <img src="./contact.png" />
      </div>
      <h3 className="text-left text-2xl  font-semibold h-72 text-white">
        Contact Not Found
      </h3>
    </div>
  );
};

export default NotFoundContact;
