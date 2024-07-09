import { LayoutProps } from "@/app/type";
import { BreadcrumbLinks } from "@/components/ui/breadcrumb";
import { getTranslation } from "@/i18n/server";

export default async function Layout(props: LayoutProps<{ id: string }>) {
  const { t } = await getTranslation(props.params.lng, "admins");
  return (
    <>
      <BreadcrumbLinks
        prependNavigation
        breadcrumbs={[
          { href: `/admins/${props.params.id}/edit`, label: t("edit") },
        ]}
      />
      {props.children}
    </>
  );
}