import styles from './table.module.css'
import Image from "next/image";
import Button from '../button';
import Link from "next/link";

const index = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.item}>
                            <Image
                                src={"/noavatar.png"}
                                alt=""
                                width={40}
                                height={40}
                                className={styles.itemImage}
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
                            <Link href="/dashboard/catalog">
                                <Button
                                    type="button"
                                    className="btn btn-success"
                                    title="View"
                                />
                            </Link>
                            <Button
                                type="button"
                                className="btn btn-danger"
                                title="Delete"
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default index