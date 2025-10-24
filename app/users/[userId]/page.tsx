import AppAreaChart from "@/components/AppAreaChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import AddUserForm from "@/components/AddUserForm";

const user = {
  id: "1",
  fullName: "Amir Hemati",
  email: "amir@gmail.com",
  phone: "09123456789",
  address: "esf,hasht behesht",
  city: "esfahan",
};

export default function page() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Amir Hemat</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col xl:flex-row gap-8 mt-4">
        {/* left  */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <AddUserForm user={user} />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2 mb-8">
                <Avatar className="size-12">
                  <AvatarImage
                    alt="avatar user image"
                    src="https://avatars.githubusercontent.com/u/1486366"
                  />
                  <AvatarFallback>Amir</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <span>Amir Hemati</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>amirGodOfWar30001@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>09913199902</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>

          {/* CARD LIST CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Orders" />
          </div>
        </div>

        {/* right */}

        <div className="w-full xl:w-2/3 space-y-6">
          {/* activiti users  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
}
