"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { getCatalogList } from '@/app/services';
import { useState, useEffect } from 'react'

const ProductsPage = () => {
    const [catalogs, setCatalogs] = useState([])
    const getCatalogs = async () => {
        try {
            const response = await getCatalogList();
            setCatalogs(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCatalogs()
    }, [])

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
                        <td>Name</td>
                        <td>Code</td>
                        <td>Description</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {catalogs.map((catalog) => (
                        <tr key={catalog.id}>
                            <td>
                                <div className={styles.product}>
                                    <Image
                                        src={catalog.img || "/noproduct.jpg"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.productImage}
                                    />
                                    {catalog.name}
                                </div>
                            </td>
                            <td>{catalog.code}</td>
                            <td>{catalog.active ? "active" : "passive"}</td>
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
                    ))}
                </tbody>
            </table>
            <Pagination count={2} />
        </div>
    )
}

export default ProductsPage