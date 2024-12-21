import { Button } from "./button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";

const CustomDialog = ({
    isOpen,
    handleClose,
    item,
  }: {
    isOpen: boolean;
    handleClose: () => void;
    item: {
      first_name: string;
      last_name: string;
      city: string;
      contact_number: string;
    };
  }) => {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fetch Details</DialogTitle>
            <DialogDescription>
              Here are the details of the following employee.
            </DialogDescription>
          </DialogHeader>
          <section>
            <p>NAME: {item.first_name + " " + item.last_name}</p>
            <p>Location: {item.city}</p>
            <p>Contact Number: {item.contact_number} </p>
            <p>Profile Image:</p>
            <img src="https://github.com/shadcn.png" alt="imag" height={50} />
          </section>
          <DialogFooter className="justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  export default CustomDialog;