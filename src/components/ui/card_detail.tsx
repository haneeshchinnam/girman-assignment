import { MapPin, Phone } from "lucide-react";
import { Button } from "./button";
import { Card, CardTitle } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const CardDetail = ({
    image,
    locationName,
    name,
    phoneNumber,
    handleOpen,
  }: {
    image: string;
    name: string;
    locationName: string;
    phoneNumber: string;
    handleOpen: () => void;
  }) => {
    return (
      <Card className="h-full pt-2 px-2 overflow-x-hidden">
        <div className="pb-2 pl-6 w-full">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={image}
              alt="@shadcn"
              className="w-20 h-20 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="pb-2 pl-6 w-full">
          <CardTitle className="text-4xl">{name}</CardTitle>
          <div className="flex gap-2 items-center">
            <MapPin size={16} />
            <p>{locationName}</p>
          </div>
        </div>
        <div className="my-2 border-t border-gray-300 mx-4" />
        <div className="flex justify-between items-center pb-4 px-4">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <Phone size={14} />
              <p className="font-bold text-sm">{phoneNumber}</p>
            </div>
            <p className="text-black/55 text-sm">Available on phone</p>
          </div>
          <Button className="px-4 rounded-xl" onClick={() => handleOpen()}>
            Fetch Details
          </Button>
        </div>
      </Card>
    );
  };

  export default CardDetail;