import { ButtonWhite } from "@/components/ButtonWhite";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@radix-ui/react-tabs";

const UserInfo = () => {
  return (
    <div className="inline-flex w-[884px] h-[509px] m-auto gap-5 border rounded-2xl">
      <div className="flex flex-col items-start gap-1">
        <ButtonWhite title="Хэрэглэгчийн хэсэг" />
        <ButtonWhite title="Захиалгын түүх" />
      </div>
      <div className="flex flex-col items-start">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account"></TabsTrigger>
            <TabsTrigger value="password"></TabsTrigger>
          </TabsList>
          <TabsContent value="account"></TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserInfo;
