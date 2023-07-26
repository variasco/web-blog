import { EditableProfileCard } from "features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { VStack } from "shared/ui";
import { Page } from "widgets/Page";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <Page>
      <VStack gap="16">
        <ProfilePageHeader />
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
