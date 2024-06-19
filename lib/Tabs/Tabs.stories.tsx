import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "./Tabs";

export default { title: "DubsUI/Tabs" };

export const Primary = () => {
  return (
    <TabsRoot defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
    </TabsRoot>
  );
};
