import { App, Header } from "@/global/components/layouts";
import { Space } from "@mantine/core";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <App>
      <Header />
      <Space className="h-[50px] md:h-[60px]" />
      {children}
    </App>
  );
}
