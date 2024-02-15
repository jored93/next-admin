import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/styles/table.module.css";
import Table from '../../ui/components/table'
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import Link from "next/link";

const Catalog = () => {
  return (
    <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <Table />
            <Pagination count={2} />
        </div>
  )
}

export default Catalog