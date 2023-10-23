import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

interface UserAvatarProps {
    src?: string;
    className?: string
};

export const UserAvatar = ({
    src,
    className
}: UserAvatarProps) => {
    return (
        <Avatar className={cn(
            "h-7 w-7 md:h-10 md:w-10",
            className
        )}>
            <AvatarImage src={src}/>
        </Avatar>
    )
}