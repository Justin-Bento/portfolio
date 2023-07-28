import Link from "next/link";

export default function SocialLinks({ className, href, children, icon: Icon }: any) {
  return (
    <li className={socialLinks.listItem}>
      <Link
        href={href}
        className={socialLinks.socialLink}
      >
        <Icon className={socialLinks.SocialLinkIcon} />
        <span className="ml-3 text-sm">{children}</span>
      </Link>
    </li>
  );
}