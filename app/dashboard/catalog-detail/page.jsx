import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/components/table/table.module.css";
import Table from '../../ui/components/table';
import Button from '../../ui/components/button';
import Link from "next/link";

const CatalogDetail = () => {
  return (
    <div className={styles.table_container}>
      <div className={styles.top}>
        <Search
          placeholder="Search"
        />
        <Link href="/dashboard/users/add">
          <Button
            type="button"
            className="btn btn-outline-primary"
            title="New"
          />
        </Link>
      </div>
      <Table />
    </div>
  )
}

export default CatalogDetail