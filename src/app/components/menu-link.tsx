import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function MenuLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            data-active={pathname === href}
            className={styles.navLink}
        >
            {children}
        </Link>
    );
}
