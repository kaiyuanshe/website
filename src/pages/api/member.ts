import { apiRequest } from './api';

// 成员相关类型定义
export interface Member {
  ID: number;
  name: string;
  avatar: string;
  title: string;
  community_id: number;
  created_at: string;
  updated_at: string;
}

export interface CreateMemberParams {
  name: string;
  avatar: string;
  title: string;
  community_id: number;
}

export interface UpdateMemberParams {
  name?: string;
  avatar?: string;
  title?: string;
}

export interface GetMembersParams {
  community_id?: number;
  page?: number;
  page_size?: number;
  order_by?: 'created_at' | 'name';
  order?: 'asc' | 'desc';
}

// 分页返回数据结构
export interface PaginatedMemberData {
  members: Member[];
  page: number;
  page_size: number;
  total: number;
}

// 统一结果结构
export interface MemberListResult {
  success: boolean;
  message: string;
  data?: PaginatedMemberData;
}

export interface MemberResult {
  success: boolean;
  message: string;
  data?: Member;
}

// 创建成员
export const createMember = async (
  params: CreateMemberParams
): Promise<MemberResult> => {
  try {
    const body = {
      name: params.name.trim(),
      avatar: params.avatar,
      title: params.title.trim(),
      community_id: params.community_id,
    };

    const response = await apiRequest<MemberResult>('/members', 'POST', body);

    if (response.code === 200 && response.data) {
      return {
        success: true,
        message: '成员创建成功',
        data: response.data as unknown as Member,
      };
    }

    return { 
      success: false, 
      message: response.message || '成员创建失败' 
    };
  } catch (error: unknown) {
    console.error('创建成员异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};

// 更新成员
export const updateMember = async (
  memberId: number,
  params: UpdateMemberParams
): Promise<MemberResult> => {
  try {
    const body: Record<string, unknown> = {};
    
    if (params.name !== undefined) body.name = params.name.trim();
    if (params.avatar !== undefined) body.avatar = params.avatar;
    if (params.title !== undefined) body.title = params.title.trim();

    const response = await apiRequest<MemberResult>(
      `/members/${memberId}`,
      'PUT',
      body
    );

    if (response.code === 200 && response.data) {
      return {
        success: true,
        message: response.message ?? '成员更新成功',
        data: response.data as unknown as Member,
      };
    }

    return { 
      success: false, 
      message: response.message ?? '成员更新失败' 
    };
  } catch (error: unknown) {
    console.error('更新成员异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};

// 获取成员列表
export const getMembers = async (
  params: GetMembersParams = {}
): Promise<MemberListResult> => {
  try {
    const query = new URLSearchParams();

    if (params.community_id) query.append('community_id', params.community_id.toString());
    if (params.order_by) query.append('order_by', params.order_by);
    
    query.append('order', params.order ?? 'desc');
    query.append('page', (params.page ?? 1).toString());
    query.append('page_size', (params.page_size ?? 10).toString());

    const response = await apiRequest<MemberListResult>(
      `/members?${query.toString()}`,
      'GET'
    );

    if (response.code === 200 && response.data) {
      return {
        success: true,
        message: response.message ?? '获取成员列表成功',
        data: response.data as unknown as PaginatedMemberData,
      };
    }

    return { 
      success: false, 
      message: response.message ?? '获取成员列表失败' 
    };
  } catch (error: unknown) {
    console.error('获取成员列表异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};

// 获取单个成员详情
export const getMember = async (memberId: number): Promise<MemberResult> => {
  try {
    if (!memberId) {
      return { success: false, message: '成员ID不能为空' };
    }

    const response = await apiRequest<MemberResult>(`/members/${memberId}`, 'GET');

    if (response.code === 200 && response.data) {
      return {
        success: true,
        message: response.message ?? '获取成员成功',
        data: response.data as unknown as Member,
      };
    }

    return { 
      success: false, 
      message: response.message ?? '获取成员失败' 
    };
  } catch (error: unknown) {
    console.error('获取成员异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};

// 删除成员
export const deleteMember = async (memberId: number): Promise<MemberResult> => {
  try {
    const response = await apiRequest<MemberResult>(`/members/${memberId}`, 'DELETE');

    if (response.code === 200) {
      return { 
        success: true, 
        message: response.message ?? '删除成功' 
      };
    }

    return { 
      success: false, 
      message: response.message ?? '删除失败' 
    };
  } catch (error: unknown) {
    console.error('删除成员异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};

// 根据社区ID获取成员列表
export const getMembersByCommunity = async (
  communityId: number,
  params?: Omit<GetMembersParams, 'community_id'>
): Promise<MemberListResult> => {
  try {
    const query = new URLSearchParams();

    query.append('community_id', communityId.toString());
    if (params?.order_by) query.append('order_by', params.order_by);
    
    query.append('order', params?.order ?? 'desc');
    query.append('page', (params?.page ?? 1).toString());
    query.append('page_size', (params?.page_size ?? 10).toString());

    const response = await apiRequest<MemberListResult>(
      `/members?${query.toString()}`,
      'GET'
    );

    if (response.code === 200 && response.data) {
      return {
        success: true,
        message: response.message ?? '获取社区成员成功',
        data: response.data as unknown as PaginatedMemberData,
      };
    }

    return { 
      success: false, 
      message: response.message ?? '获取社区成员失败' 
    };
  } catch (error: unknown) {
    console.error('获取社区成员异常:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络错误，请稍后重试',
    };
  }
};