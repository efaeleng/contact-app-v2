const ContactCards = ({ contactList }) => {
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure className="bg-white text-white h-80 rounded-lg shadow-md" key={index}>
          <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.avatar} />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.first_name} {contact.last_name}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>{contact.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>{contact.Phone_number}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span>{contact.address.city}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default ContactCards