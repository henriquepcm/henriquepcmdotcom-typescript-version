import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Simple Types
export interface Certification {
     year: number;
     link: string;
     title: string;
}

export interface College {
     duration: string;
     college: string;
     title: string;
}

export interface Experience {
     duration: string;
     jobTitle: string;
     company: string;
     employmentStatus: string;
     workLocation: string;
     responsibilities: string;
     growth: string;
     skills: string[];
}

export interface Project {
     duration: string;
     name: string;
     description: string;
     link: string;
}

export interface SocialLink {
     name: string;
     url: string;
     icon: IconDefinition;
}

// Props Types
export interface ToggleMenuProps {
     toggleMenu: () => void;
}

export interface ExperienceItemProps {
     experience: Experience;
}

export interface TagListProps {
     tags: string[];
}

export interface CloseMenuProps {
     closeMenu: () => void;
}

export interface HeadingProps {
     children: React.ReactNode;
     isHome: boolean;
}

export interface MenuItemProps {
     label: string;
     linkTo: string;
     toggleMenu: () => void;
}

export interface PageMainContentProps {
     children: React.ReactNode;
     containerWrapper: string;
     container: string;
}

export interface ProjectItemProps {
     duration: string;
     description: string;
     link: string;
     name: string;
}

//Combined Types
export type CertificationItemProps = Certification & {
     showYear: boolean;
};

export interface HeaderProps extends ToggleMenuProps, CloseMenuProps {}

export type MenuProps = HeaderProps & {
     menuRef: React.RefObject<HTMLDivElement>;
     menuIsOpen: boolean;
};
