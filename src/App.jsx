import Profile from "./components/Profile";

const dataFromServer = [
  {
    name: "Іван Петров",
    phone: "+380501234567",
    email: "ivan.petrov@example.com",
    status: "online",
    avatar: "https://example.com/avatars/ivan.jpg",
    hasPhisicalAddress: false,
  },
  {
    name: "Олена Коваль",
    phone: "+380671234567",
    email: "olena.koval@example.com",
    status: "offline",
    avatar: "https://example.com/avatars/olena.jpg",
    hasPhisicalAddress: false,
  },
  {
    name: "Максим Дмитренко",
    phone: "+380931234567",
    email: "maksym.dmytrenko@example.com",
    status: "online",
    avatar: "https://example.com/avatars/maksym.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Анна Шевченко",
    phone: "+380661234567",
    email: "anna.shevchenko@example.com",
    status: "offline",
    avatar: "https://example.com/avatars/anna.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Олександр Бондаренко",
    phone: "+380991234567",
    email: "oleksandr.bondarenko@example.com",
    status: "online",
    avatar: "https://example.com/avatars/oleksandr.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Марія Савченко",
    phone: "+380631234567",
    email: "maria.savchenko@example.com",
    status: "offline",
    avatar: "https://example.com/avatars/maria.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Дмитро Литвин",
    phone: "+380501234568",
    email: "dmytro.lytvyn@example.com",
    status: "online",
    avatar: "https://example.com/avatars/dmytro.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Катерина Грищенко",
    phone: "+380671234568",
    email: "kateryna.hryshchenko@example.com",
    status: "offline",
    avatar: "https://example.com/avatars/kateryna.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Сергій Мельник",
    phone: "+380931234568",
    email: "serhii.melnyk@example.com",
    status: "online",
    avatar: "https://example.com/avatars/serhii.jpg",
    hasPhisicalAddress: true,
  },
  {
    name: "Юлія Зайцева",
    phone: "+380661234568",
    email: "yulia.zaitseva@example.com",
    status: "offline",
    avatar: "https://example.com/avatars/yulia.jpg",
    hasPhisicalAddress: false,
  },
];

function App() {
  return (
    <div>
      {dataFromServer.map((profile) => {
        return (
          <Profile
            key={profile.email} // id
            name={profile.name}
            phone={profile.phone}
            email={profile.email}
            status={profile.status}
            hasPhisicalAddress={profile.hasPhisicalAddress}
          />
        );
      })}

      {/* <ProfileList list={dataFromServer} /> */}

      {/* <Profile
        name="Max"
        phone="123456789"
        email="0i5k0@example.com"
        status="online"
        hasPhisicalAddress={false}
      /> */}

      <Profile
        name="Max"
        phone="123456789"
        email="0i5k0@example.com"
        status="online"
        hasPhisicalAddress={false}
      />
    </div>
  );
}

export default App;
