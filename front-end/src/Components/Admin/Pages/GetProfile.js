import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/Saga/Types/ActionTypes";
import {
  ProfileContainer,
  Table,
  TableData,
  TableHeader,
  TableHeaderContainer,
  TableRow,
  TableRowHolder,
} from "../Styles/ProfileControl.styled";

export default function GetProfile() {
  const data = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA });
  }, []);
  return (
    <div>
      <ProfileContainer>
        <Table>
          <TableHeaderContainer>
            <TableHeader>
              <p>Title</p>
            </TableHeader>
            <TableHeader>
              <p>Description</p>
            </TableHeader>
            <TableHeader>
              <p>Used Techs</p>
            </TableHeader>
            <TableHeader>
              <p>Links</p>
            </TableHeader>
            <TableHeader>
              <p>Status</p>
            </TableHeader>
            <TableHeader>
              <p>Status</p>
            </TableHeader>
          </TableHeaderContainer>
          <TableRowHolder>
            {data &&
              data.map((file) => (
                <TableRow>
                  <TableData>{file.title}</TableData>
                  <TableData>{file.description}</TableData>
                  <TableData>{file.usedTech}</TableData>
                  <TableData>{file.link}</TableData>
                  <TableData>Update</TableData>
                  <TableData>Delete</TableData>
                </TableRow>
              ))}
          </TableRowHolder>
        </Table>
      </ProfileContainer>
    </div>
  );
}
