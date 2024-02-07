import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src={"/noproduct.jpg"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                username
                            </div>
                        </td>
                        <td>description</td>
                        <td>$25</td>
                        <td>January</td>
                        <td>20</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/products/view`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form >
                                    <input type="hidden" name="id" />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src={"/noproduct.jpg"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                username
                            </div>
                        </td>
                        <td>eduardorrala@live.com</td>
                        <td>CreatedAt</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form >
                                    <input type="hidden" name="id" />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination count={2} />
        </div>
    )
}

export default ProductsPage