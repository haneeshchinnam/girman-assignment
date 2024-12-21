import { useMemo, useState } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import NavBar from "./components/ui/navbar";
import { Search } from "lucide-react";
import { data } from "./utils";
import CardDetail from "./components/ui/card_detail";
import CustomDialog from "./components/ui/custom_detail";

function App() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState<{
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
  }>({ city: "", contact_number: "", first_name: "", last_name: "" });

  const handleClose = () => {
    setShowDialog(false);
  };

  const searchData = useMemo(() => {
    return text
      ? data.filter(
          (l) =>
            l.city.includes(text) ||
            l.contact_number.includes(text) ||
            l.first_name.includes(text) ||
            l.last_name.includes(text)
        )
      : [];
  }, [text]);

  return (
    <div
      className={`bg-gradient-to-b from-white to-blue-200 w-full ${
        searchData.length ? "h-full" : "h-screen"
      }`}
    >
      <div className="absolute">
        <NavBar />
      </div>
      <section className="flex flex-col w-full items-center pt-24 sm:pt-40 md:pt-40 lg:pt-40 gap-10">
        {!focus && (
          <section className="hidden sm:flex gap-8 items-center">
            <img
              src="/girman_logo.png"
              alt="girman-logo"
              className="h-[88px]"
            />
            <p className="font-semibold text-9xl">Girman</p>
          </section>
        )}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[90vw] sm:w-[36rem] md:w-[36rem] lg:w-[36rem] xl:w-[36rem] bg-white pl-7"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <Search
            className="absolute top-2.5 left-1.5 text-black/45"
            size={16}
          />
        </div>
        <div className="w-[90vw] sm:w-[40rem] md:w-[40rem] lg:w-[40rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {focus &&
            searchData.map((item, index) => (
              <CardDetail
                key={index}
                image="https://github.com/shadcn.png"
                locationName={item.city}
                name={item.first_name + " " + item.last_name}
                phoneNumber={item.contact_number}
                handleOpen={() => {
                  setShowDialog(true);
                  setDialogData(item);
                }}
              />
            ))}
        </div>
        <div className="flex justify-center items-center w-full">
          {focus && text && !searchData.length && (
            <img src="/no_result.png" alt="no_result" />
          )}
        </div>
      </section>
      <CustomDialog
        handleClose={handleClose}
        isOpen={showDialog}
        item={dialogData}
      />
    </div>
  );
}

export default App;

