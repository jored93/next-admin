import styles from '../../styles/table.module.css'
import Image from "next/image";
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
                        <div className={styles.user}>
                            <Image
                                src={"/noavatar.png"}
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            username
                        </div>
                    </td>
                    <td>eduardorrala@live.com</td>
                    <td>CreatedAt</td>
                    <td>Admin</td>
                    <td>Active</td>
                    {/* <td>
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
                    </td> */}
                </tr>
                {/* <tr>
                    <td>
                        <div className={styles.user}>
                            <Image
                                src={"/noavatar.png"}
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
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
                </tr> */}
            </tbody>
        </table>
    )
}

export default index