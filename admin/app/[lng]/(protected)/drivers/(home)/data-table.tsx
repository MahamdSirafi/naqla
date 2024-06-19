"use client";
import { DataTable } from "@/components/ui/data-table";
import { useTranslation } from "@/i18n/client";
import { Driver } from "@/service/api.schemas";
import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { TFunction } from "i18next";
const columnHelper = createColumnHelper<Driver>();
export const columns = (t: TFunction<string, string>) => [
  columnHelper.accessor("photo.webUrl", {
    cell: ({ cell }) => (
      <img
        alt="customer"
        className="h-5 w-5 flex-shrink"
        src={cell.getValue()}
      />
    ),

    header: "",
  }),
  columnHelper.display({
    cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`,
    header: t("name"),
  }),
  columnHelper.accessor("phone", {
    header: t("phone"),
  }),
  columnHelper.accessor("wallet.total", {
    header: t("wallet"),
  }),
  columnHelper.accessor("createdAt", {
    header: t("createdAt"),
    cell: ({ cell }) => dayjs(cell.getValue()).format("YYYY/MM/DD hh:mm A"),
  }),
];
export type DiversTableProps = { data: Driver[] };
export function DriversTable({ data }: DiversTableProps) {
  const { t } = useTranslation("drivers");
  return (
    <article className="flex flex-col gap-2">
      {/* @ts-ignore */}
      <DataTable columns={columns(t)} data={data} />
    </article>
  );
}
